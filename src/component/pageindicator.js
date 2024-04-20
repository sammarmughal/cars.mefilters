import { useState, useEffect } from 'react';

const PageIndicator = ({
  pagerState,
  indicatorCount = 10,
  indicatorSize = '16px',
  space = '8px',
  activeColor = '#0033FF',
  inActiveColor = 'LightGray',
  orientation = 'Horizontal',
  onClick
}) => {
  const [currentItem, setCurrentItem] = useState(pagerState.currentPage);
  const [activeDot, setActiveDot] = useState(currentItem);

  useEffect(() => {
    const scrollToPosition = currentItem * (parseInt(indicatorSize) + parseInt(space));

    if (orientation === 'Horizontal') {
      window.scrollTo({
        left: scrollToPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    }

    setActiveDot(currentItem);
  }, [currentItem, indicatorSize, space, orientation]);

  const isLeftEdgeItem = index =>
    index <= currentItem - indicatorCount / 9 &&
    currentItem > indicatorCount / 9 &&
    index < pagerState.pageCount - indicatorCount + 1;

  const isRightEdgeItem = index =>
    (currentItem < indicatorCount / 9 &&
      index >= indicatorCount - 1) ||
    (currentItem >= indicatorCount / 9 &&
      index >= currentItem + indicatorCount / 9 &&
      index < pagerState.pageCount - indicatorCount + 1);

  return (
    <div style={{
      width: '100%',
      overflowX: 'scroll',
      whiteSpace: 'nowrap',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {Array.from({ length: pagerState.pageCount }, (_, index) => (
        <div
          key={index}
          style={{
            width: indicatorSize,
            height: indicatorSize,
            borderRadius: '50%',
            background: activeDot === index ? activeColor : inActiveColor,
            display: 'inline-block',
            marginRight: space,
            transform: `
              scale(${activeDot === index ? 1 : isLeftEdgeItem(index) || isRightEdgeItem(index) ? 0.8 : 0.5})
            `,
            cursor: onClick ? 'pointer' : 'auto'
          }}
          onClick={() => {
            setCurrentItem(index);
            onClick && onClick(index);
          }}
        />
      ))}
    </div>
  );
};

export default PageIndicator;