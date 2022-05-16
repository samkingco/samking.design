import Link from "next/link";
import { SocialMeta } from "../components/SocialMeta";
import { jobs } from "../content";

export default function IndexPage() {
  return (
    <>
      <SocialMeta />

      <main>
        <h1>Sam King</h1>
        <p className="subdued">he/him</p>
        <p>
          software design & engineering
          <br />
          available for new projects through{" "}
          <a href="https://samking.studio">samking.studio</a>
        </p>

        <hr />

        <h3>history</h3>
        <ul>
          {jobs.map((job) => (
            <li key={`${job.start}_${job.end || "present"}`}>
              <span className="num">
                {job.start}–
                {job.end ? (
                  job.end
                ) : (
                  <span className="hidden">
                    {new Date().getFullYear().toString().slice(-2)}
                  </span>
                )}
              </span>{" "}
              {job.role}{" "}
              {job.company && (
                <>
                  at{" "}
                  {job.companyHref ? (
                    <>
                      {job.companyHref.startsWith("/") ? (
                        <Link href={job.companyHref}>
                          <a>{job.company}</a>
                        </Link>
                      ) : (
                        <a href={job.companyHref}>{job.company}</a>
                      )}
                    </>
                  ) : (
                    job.company
                  )}
                </>
              )}
            </li>
          ))}
        </ul>

        <hr />

        <a href="https://samking.co">elsewhere</a>
      </main>
    </>
  );
}
