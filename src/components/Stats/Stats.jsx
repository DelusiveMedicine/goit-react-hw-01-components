import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const randomColor = () => {
  const first = Math.floor(Math.random() * 256);
  const second = Math.floor(Math.random() * 256);
  const third = Math.floor(Math.random() * 256);
  const color = `rgb(${first},${second},${third})`;
  return color;
};

const Stats = ({ stats, title }) => {
  const {
    container,
    statsList,
    statsTitle,
    statsListItem,
    statsLabel,
  } = styles;

  return (
    <section className={container}>
      {title ? <h2 className={statsTitle}>{title}</h2> : null}
      <ul className={statsList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={statsListItem}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={statsLabel}>{stat.label}</span>
            <span>{`${stat.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

Stats.defaultProps = {
  title: '',
};

export default Stats;
