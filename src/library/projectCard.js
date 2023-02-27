import { Link } from "react-router-dom";
import { RxExternalLink } from "react-icons/rx";
import { techIcons } from "../utilities/helpers";


export function projectCard(name, img, repo, site, summary, pages, p) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="card-front">
          <div className="card-front-details">
            <h4>{name}</h4>
            {techIcons(p)}
          </div>
        </div>
        <div className="card-back">
          <h4>{name}</h4>
          <p>{summary}</p>
          <div className="card-links">
            <a className="project-links" target="_blank" href={repo}>
              Repo
              <RxExternalLink />
            </a>
            {site === "[offline]" ? (
              <span className="project-links"> Site: &lt;Offline&gt;</span>
            ) : (
              <a className="project-links" target="_blank" href={site}>
                Site
                <RxExternalLink />
              </a>
            )}
            {pages.length === 0 ? null : (
              <Link className="carousel__link" to={`/projects/${name}`}>
                <div className="carousel__link">Details</div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
