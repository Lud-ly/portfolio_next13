const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <h6 className="my-auto text-xs text-right font-semibold tracking-wide p-3">
        &copy; {currentYear}
      </h6>
    </>
  );
};

export default Footer;
