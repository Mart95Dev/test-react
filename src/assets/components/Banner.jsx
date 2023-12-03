// eslint-disable-next-line react/prop-types
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
