import PropTypes from 'prop-types';
import s from '../feedback.module.css';

const Section = ({ children, title }) => {
  return (
    <>
      <h3 className={s.title}>{title}</h3>
      {children}
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
