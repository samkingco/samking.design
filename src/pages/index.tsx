import Image from "next/image";
import Link from "next/link";
import { SocialMeta } from "../components/SocialMeta";
import { jobs } from "../content";

export default function IndexPage() {
  return (
    <>
      <SocialMeta />

      <main>
        <div className="pfp">
          <picture className="pfp-main">
            <Image
              src="/avatar.jpg"
              width="200"
              height="200"
              alt="Avatar photo is a self portrait of Sam King. Taken with an old Hasselblad film camera shooting into a mirror."
            />
          </picture>
        </div>
        <h1>Sam King</h1>
        <p className="subdued mono">he/him</p>
        <p>
          available for new projects through{" "}
          <a href="https://samking.studio">samking.studio</a>.<br />
          find me online <a href="https://samking.co">elsewhere</a>.
        </p>

        <hr />

        <h3 className="subdued mono">history</h3>
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
      </main>
    </>
  );
}
