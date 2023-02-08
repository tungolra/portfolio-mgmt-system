import { Link } from "react-router-dom";
import { RxExternalLink } from "react-icons/rx";

export function projectCard(name, img, repo, site, summary, pages) {
    return (
      <div className="flip-card">
            <h4>{name}</h4>
        <div className="flip-card-inner">
          <div className="card-front">
            <img src={img} alt="project-image" />
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
              {pages.length === 0 ? null : 
              <Link className="carousel__link" to={`/projects/${name}`}>
                <div className="carousel__link">Details</div>
              </Link>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }