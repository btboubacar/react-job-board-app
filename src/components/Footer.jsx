const Footer = (props) => {
  return (
    <footer className={props.className}>
      <p>
        Made with <span>React</span> at{" "}
        <span>
          <a href={props.link1} target="_blank">
            LeReacteur
          </a>
        </span>{" "}
        by{" "}
        <span>
          <a href={props.link2} target="_blank">
            B.T.
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
