const Tordata = ({ pic, date, title, info, icon, country, days, amount }) => {
  return (
    <>
      <article className="tour-card">
        <div className="tour-img-container">
          {<img src={pic} className="tour-img" alt="" />}
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>{info}</p>
          <div className="tour-footer">
            <p>
              <span>
                <i className={icon}></i>
              </span>{" "}
              {country}
            </p>
            <p>{days}</p>
            <p>{amount}</p>
          </div>
        </div>
      </article>
    </>
  );
};
export default Tordata;
