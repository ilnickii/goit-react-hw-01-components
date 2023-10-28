import css from './Statistics.module.css';

const createRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777214).toString(16);
  return `#${randomColor}`;
};

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css['stat-list']}>
        {stats.map(({ id, label, percentage }) => (
          <li
                className={css.item}
                key={id}
                style={{ backgroundColor: createRandomColor() }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};