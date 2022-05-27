import React, { useMemo, useState } from 'react';
import {
  OptionalPortal,
  GroupedTransition,
  Overlay,
  Paper,
  TextInput,
  getDefaultZIndex,
  getGroupedOptions,
} from '@mantine/core';
import { useScrollLock, useFocusTrap, useDidUpdate, useFocusReturn } from '@mantine/hooks';
import { DefaultAction } from '../DefaultAction/DefaultAction';
import { ActionsList } from '../ActionsList/ActionsList';
import { filterActions } from './filter-actions/filter-actions';
import useStyles from './Spotlight.styles';
import { SpotlightProps } from './Spotlight';

export function SpotlightPerformance({
  query,
  onQueryChange,
  actions,
  onClose,
  opened,
  withinPortal,
  transition = 'pop',
  transitionDuration,
  classNames,
  styles,
  overlayColor = '#000',
  overlayOpacity = 0.25,
  overlayBlur = 3,
  shadow = 'md',
  radius = 'sm',
  centered = false,
  closeOnActionTrigger = true,
  highlightQuery = false,
  highlightColor,
  maxWidth = 600,
  topOffset = 120,
  className,
  searchPlaceholder,
  searchIcon,
  filter = filterActions,
  nothingFoundMessage,
  limit = 10,
  actionComponent = DefaultAction,
  actionsWrapperComponent: ActionsWrapper = 'div',
  zIndex = getDefaultZIndex('modal'),
  ...others
}: SpotlightProps) {
  const [hovered, setHovered] = useState(-1);
  const { classes, cx } = useStyles(
    { centered, maxWidth, topOffset, radius },
    { classNames, styles, name: 'Spotlight' }
  );

  const [, lockScroll] = useScrollLock();
  const focusTrapRef = useFocusTrap(opened);

  const resetHovered = () => setHovered(-1);
  const handleClose = () => {
    resetHovered();
    onClose();
  };

  useFocusReturn({ transitionDuration: 0, opened });

  const filteredActions = useMemo(
    () => filter(query, actions).slice(0, limit),
    [query, actions, limit]
  );
  const groupedWithLabels = useMemo(
    () => getGroupedOptions(filteredActions).items,
    [filteredActions]
  );
  const groupedActions = useMemo(() => groupedWithLabels
      .map((item) => (item.type === 'item' ? item.item : undefined))
      .filter((item) => item), [groupedWithLabels]);

  useDidUpdate(() => {
    if (groupedActions.length - 1 < hovered) {
      setHovered(groupedActions.length - 1);
    }
  }, [groupedActions.length]);

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.code) {
      case 'ArrowDown': {
        event.preventDefault();
        setHovered((current) => (current < groupedActions.length - 1 ? current + 1 : 0));
        break;
      }

      case 'ArrowUp': {
        event.preventDefault();
        setHovered((current) => (current > 0 ? current - 1 : groupedActions.length - 1));
        break;
      }

      case 'Enter': {
        event.preventDefault();
        const action = groupedActions[hovered];
        action?.onTrigger?.(action);
        if (closeOnActionTrigger && action?.onTrigger) {
          handleClose();
        }
        break;
      }

      case 'Escape': {
        event.preventDefault();
        handleClose();
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onQueryChange(event.currentTarget.value);
    if (hovered === -1) {
      setHovered(0);
    }
  };

  return (
    <OptionalPortal withinPortal={withinPortal} zIndex={zIndex}>
      <GroupedTransition
        onExited={() => lockScroll(false)}
        onEntered={() => lockScroll(true)}
        mounted={opened}
        transitions={{
          spotlight: {
            duration: transitionDuration,
            transition,
            timingFunction: 'ease',
          },
          // overlay: {
          //   duration: transitionDuration / 2,
          //   transition: 'fade',
          //   timingFunction: 'ease',
          // },
        }}
      >
        {(transitionStyles) => (
          <div className={cx(classes.root, className)} {...others}>
            <div className={classes.inner} ref={focusTrapRef}>
              <Paper
                style={transitionStyles.spotlight}
                className={classes.spotlight}
                shadow={shadow}
                radius={radius}
                onMouseLeave={resetHovered}
              >
                <TextInput
                  value={query}
                  onChange={handleInputChange}
                  onKeyDown={handleInputKeyDown}
                  classNames={{ input: classes.searchInput }}
                  size="lg"
                  placeholder={searchPlaceholder}
                  icon={searchIcon}
                  onMouseEnter={resetHovered}
                />
                <ActionsWrapper>
                  <ActionsList
                    highlightQuery={highlightQuery}
                    highlightColor={highlightColor}
                    actions={groupedWithLabels}
                    actionComponent={actionComponent}
                    hovered={hovered}
                    query={query}
                    nothingFoundMessage={nothingFoundMessage}
                    onActionHover={setHovered}
                    onActionTrigger={(action) => {
                      action.onTrigger(action);
                      closeOnActionTrigger && handleClose();
                    }}
                    styles={styles}
                    classNames={classNames}
                    radius={radius}
                  />
                </ActionsWrapper>
              </Paper>

              <div style={transitionStyles.overlay}>
                <Overlay
                  className={classes.overlay}
                  zIndex={1}
                  onMouseDown={handleClose}
                  color={overlayColor}
                  opacity={overlayOpacity}
                  blur={overlayBlur}
                />
              </div>
            </div>
          </div>
        )}
      </GroupedTransition>
    </OptionalPortal>
  );
}

SpotlightPerformance.displayName = '@mantine/spotlight/SpotlightPerformance';
