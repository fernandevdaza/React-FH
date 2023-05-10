import PropTypes from 'prop-types';

export function FirstApp({ title, subtitle, name }) {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
// FirstApp.defaultProps = {
//   // title: 'No hay título',
//   subtitle: '123',
//   name: 'Fernando Daza',
// };
