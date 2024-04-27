// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/ajay-prajapati-bb395718b/"
        target="_blank"
        title="Ajay Prajapati's Linkedin Profile"
      >
        Ajay Prajapati
      </a>
      <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food<span>Park</span>
        </strong>
    </div>
  );
};

export default Footer;
