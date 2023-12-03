import PropTypes from "prop-types";

export default function Banner({ imageBanner, children }) {
  return (
    <>
      <div className="banner-container">
        <img src={imageBanner} alt="image banner acceuil" />
        {children}
      </div>
    </>
  );
}

Banner.propTypes = {
  imageBanner: PropTypes.string,
  children: PropTypes.element,
};
