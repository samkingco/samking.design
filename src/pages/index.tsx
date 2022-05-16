import Image from "next/image";
import Link from "next/link";
import { SocialMeta } from "../components/SocialMeta";
import { jobs, links } from "../content";

export default function IndexPage() {
  return (
    <>
      <SocialMeta />

      <main>
        <div className="pfp">
          <Image
            src="/avatar.jpg"
            alt="Avatar photo is a self portrait of Sam King. Taken with an old Hasselblad film camera shooting into a mirror."
            width={400}
            height={400}
            layout="responsive"
          />
        </div>

        <h1>Sam King</h1>
        <p className="subdued">he/him</p>
        <p>
          software design & engineering
          <br />
          available for new projects through{" "}
          <a href="https://samking.studio">samking.studio</a>
        </p>

        <hr />

        <h3>links</h3>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>

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
      </main>
    </>
  );
}
