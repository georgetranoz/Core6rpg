import { Link } from 'react-router-dom';
import { c6oglPdfUrl } from '../config';
import { usePageMeta } from '../hooks/usePageMeta';

export function C6oglPage() {
  usePageMeta(
    'Core6 Open Game Licence (C6OGL) — Core6 RPG',
    'The Core6 Open Game Licence v1.0. Royalty-free for indie creators, share-alike, plus the full legal terms and a plain-English FAQ.',
  );

  return (
    <div className="page-inner page-inner--narrow">
      <p className="section-label">Open Game Licence</p>
      <h1 className="page-title">Core6 Open Game Licence</h1>
      <p className="page-lead">Version 1.0 — October 2025</p>

      {c6oglPdfUrl ? (
        <p>
          <a className="btn btn--secondary btn--small" href={c6oglPdfUrl}>
            Download as PDF
          </a>
        </p>
      ) : null}

      <section className="content-section">
        <p>
          We want to make this simple. Here&apos;s what our license means for
          you in plain English.
        </p>
        <p>
          Our goal is to give you the tools to create. If you&apos;re an indie
          creator or a small business, everything in the &quot;Go For It&quot;
          list is yours to make and sell, royalty-free. You keep 100%.
        </p>
      </section>

      {/* === Plain-English summary === */}

      <section className="content-section">
        <h2>Go For It (Royalty-Free for Small Creators)</h2>
        <ul>
          <li>
            <strong>Make Tabletop Games:</strong> Create and sell your own
            TTRPGs, supplements, new game worlds, board games, and complete
            &quot;RPG-in-a-Box&quot; sets.
          </li>
          <li>
            <strong>Create Physical Products:</strong> Design and sell your own
            miniatures, 3D-printable files, and general merchandise like
            t-shirts and art prints.
          </li>
          <li>
            <strong>Tell Your Stories:</strong> Write and publish fan novels and
            stories, or create fan films, live-play streams, and podcasts.
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Let&apos;s Talk First (Requires a Separate License for Everyone)</h2>
        <ul>
          <li>
            <strong>Software &amp; Video Games:</strong> Developing any
            software, video games, or coded VTT modules (like automated
            character sheets) requires a direct license.
          </li>
          <li>
            <strong>Professional Film &amp; TV:</strong> Producing a
            professional, commercial film or television series requires a direct
            license.
          </li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Our One Big Rule: Be Honourable</h2>
        <p>
          The &quot;Go For It&quot; list is completely open for indie creators
          and small businesses.
        </p>
        <p>
          If you&apos;re a Major Commercial Entity (a company with over $2
          million USD in annual revenue), that&apos;s fantastic — we just ask
          that you partner with us directly by getting a commercial license
          before publishing a for-profit product.
        </p>
        <p>
          For everyone else, the toolbox is open. Go build something incredible.
        </p>
      </section>

      {/* === Full legal terms === */}

      <section className="content-section">
        <h2>Full Legal Terms</h2>

        <h3>1. Definitions</h3>
        <ul>
          <li>
            <strong>a. &quot;License&quot;:</strong> This document, the Core6
            Open Game License Version 1.0.
          </li>
          <li>
            <strong>b. &quot;Licensor&quot; or &quot;Mango&quot;:</strong> Mango
            Dog Pty Ltd (ACN 628 425 481), the sole owner of the Core6 System.
          </li>
          <li>
            <strong>c. &quot;You&quot; or &quot;Licensee&quot;:</strong> Any
            individual or entity exercising rights under this License.
          </li>
          <li>
            <strong>d. &quot;Contributor&quot;:</strong> Any Licensee that
            Publishes Derivative Material under this License.
          </li>
          <li>
            <strong>e. &quot;Core6 System&quot;:</strong> The entirety of the
            proprietary game rules and mechanics presented in official Core6
            rulebooks.
          </li>
          <li>
            <strong>f. &quot;Open Game Content&quot; (OGC):</strong>
            <ul>
              <li>
                i. All Core6 System mechanical content explicitly designated as
                OGC by the Licensor.
              </li>
              <li>
                ii. All content within a Contributor&apos;s Derivative Material
                that is not explicitly designated as that Contributor&apos;s
                Product Identity, in accordance with Section 5.
              </li>
            </ul>
          </li>
          <li>
            <strong>g. &quot;Product Identity&quot; (PI):</strong>
            <ul>
              <li>
                i. The commercial names and trademarks &quot;Core6™&quot;,
                &quot;Core6 Battlegrounds&quot;, &quot;Core6 Tactics&quot;,
                &quot;Core6 Waves&quot; and &quot;Mango Dog™&quot;, and all
                associated logos and trade dress.
              </li>
              <li>
                ii. All non-mechanical, expressive content in official Core6
                publications, including artwork and narrative content, that are
                not explicitly designated as OGC.
              </li>
              <li>
                iii. All rights related to software, computer games, video
                games, VTT Software Adaptations, professional motion pictures,
                television series, professional animated works, and
                novels/prose fiction are Reserved PI.
              </li>
            </ul>
          </li>
          <li>
            <strong>h. &quot;Contributor Product Identity&quot;:</strong> New
            and original content, including but not limited to unique narrative,
            characters, setting material, and artwork, that a Contributor
            explicitly designates as their own protected intellectual property.
          </li>
          <li>
            <strong>
              i. &quot;Derivative Material&quot; or &quot;Work&quot;:
            </strong>{' '}
            Any original work of authorship created by You that incorporates
            OGC, including TTRPGs, board games, miniatures, general
            merchandise, and VTT Modules (content only).
          </li>
          <li>
            <strong>j. &quot;Major Commercial Entity&quot; (MCE):</strong> A
            Licensee (plus its controlled affiliates) with Annual Gross Revenue
            exceeding Two Million United States Dollars ($2,000,000 USD).
          </li>
          <li>
            <strong>k. &quot;Annual Gross Revenue&quot;:</strong> The
            Licensee&apos;s total worldwide gross revenue in USD for the most
            recent financial year.
          </li>
          <li>
            <strong>
              l. &quot;Publish&quot; or &quot;Publication&quot;:
            </strong>{' '}
            The act of making Derivative Material publicly available for
            commercial purposes.
          </li>
          <li>
            <strong>m. &quot;Third-Party Protected IP&quot;:</strong> Any
            intellectual property owned by a party other than the Licensor or
            You.
          </li>
          <li>
            <strong>n. &quot;VTT Software Adaptation&quot;:</strong> Any
            software or code that adapts or integrates the Core6 System to
            function within a digital application.
          </li>
        </ul>

        <h3>2. Grant of License and Irrevocability</h3>
        <ul>
          <li>
            <strong>a. License Grant:</strong> The Licensor hereby grants You a
            worldwide, royalty-free, non-exclusive, perpetual, and irrevocable
            license to Use the Open Game Content to create, Publish, and
            distribute Derivative Material in accordance with all terms of this
            License.
          </li>
          <li>
            <strong>b. Irrevocability Pledge:</strong> This License (C6OGL 1.0)
            is perpetual and irrevocable. The Licensor pledges not to revoke,
            cancel, or &quot;deauthorize&quot; this version. Rights granted for
            a Work cannot be retroactively altered, save for Your uncured
            material breach.
          </li>
          <li>
            <strong>c. Commercial Use Rights:</strong> You are permitted to
            commercially Publish and monetize Derivative Material, and You shall
            retain all net profits, provided the Work adheres to this License.
            This right is subject to the provisions for MCEs in Section 3.
          </li>
        </ul>

        <h3>3. Major Commercial Entities: The &quot;Be Honourable&quot; Clause</h3>
        <ul>
          <li>
            <strong>a. License Requirement for MCEs:</strong> This License
            restricts any MCE from commercially Publishing any Derivative
            Material without a separate, commercially negotiated license
            agreement from Mango (contact{' '}
            <a href="mailto:ip@core6rpg.com">ip@core6rpg.com</a>).
          </li>
          <li>
            <strong>b. Scope:</strong> This requirement applies to all forms of
            for-profit Derivative Material permitted under this License.
          </li>
          <li>
            <strong>c. Trigger:</strong> The obligation to secure a separate
            license begins in the first financial year after You cross the
            $2,000,000 USD Annual Gross Revenue threshold.
          </li>
          <li>
            <strong>d. Protection of Independent Creators:</strong> This
            restriction applies only to MCEs. All other creators retain their
            full and irrevocable royalty-free rights under this License.
          </li>
        </ul>

        <h3>4. Reserved Rights</h3>
        <ul>
          <li>
            <strong>a. Software, Digital Media, Film &amp; TV:</strong> You
            shall not Use OGC to create or distribute software (including video
            games and VTT Software Adaptations), professional motion pictures,
            or television series, as these rights are specifically reserved by
            the Licensor.
          </li>
          <li>
            <strong>b. Novels and Prose Fiction:</strong> The right to create
            novels, short stories, and other prose fiction based on Core6
            Product Identity is reserved by the Licensor and not granted under
            this license.
          </li>
        </ul>

        <h3>5. Contribution of Open Game Content (Share-Alike)</h3>
        <ul>
          <li>
            <strong>a. Open by Default:</strong> By Publishing a Work under this
            License, You agree that all new, original content You create within
            that Work — including but not limited to characters, settings,
            plots, rules, stat blocks, and artwork — is automatically licensed
            as Open Game Content for all other Licensees to Use.
          </li>
          <li>
            <strong>b. Your Right to Reserve IP (Opt-Out):</strong> You may keep
            your own original creations as your exclusive property by clearly
            and unambiguously designating them as &quot;Contributor Product
            Identity&quot; in a readily identifiable section of your Work.
          </li>
          <li>
            <strong>c. Consequence of Not Designating:</strong> Any content
            within Your Work that is not explicitly designated as Contributor
            Product Identity is irrevocably licensed as OGC for the entire
            community to Use. You retain the copyright to such content, but you
            grant a perpetual, worldwide, royalty-free license for it to be used
            as OGC.
          </li>
          <li>
            <strong>d. License Back to Mango:</strong> By contributing OGC, You
            grant Mango a non-exclusive, perpetual, worldwide, royalty-free
            license to use, reproduce, modify, and distribute that OGC,
            including in its own commercial products.
          </li>
        </ul>

        <h3>6. Future Versions of this License</h3>
        <ul>
          <li>
            <strong>a.</strong> Mango may publish newer authorized versions of
            the C6OGL. Works already released under C6OGL 1.0 stay on 1.0
            forever. Any Work first Published after a later version is released
            must adopt that latest version.
          </li>
        </ul>

        <h3>7. Conditions of Use &amp; Attribution</h3>
        <p>
          Your license is conditional upon Your strict compliance with the
          following:
        </p>
        <ul>
          <li>
            <strong>a. Include This License:</strong> You must include the full,
            complete, and unmodified text of this License within any Work You
            distribute.
          </li>
          <li>
            <strong>b. Cover Branding Display:</strong> You must prominently
            display the official &quot;Powered by Core6™&quot; logo on the front
            cover of Your Work, occupying at least 5% of the total visible area.
          </li>
          <li>
            <strong>c. Designate Your Product Identity:</strong> You must
            clearly designate which portions of Your Work are Your Contributor
            Product Identity. Any content not so designated is automatically
            considered OGC under Section 5.
          </li>
          <li>
            <strong>d. No Misrepresentation:</strong> You shall not claim or
            imply any official affiliation with or endorsement by the Licensor.
          </li>
          <li>
            <strong>e. Unauthorized Third-Party IP is Strictly Prohibited:</strong>{' '}
            You shall NOT incorporate any Third-Party Protected IP unless You
            have obtained all necessary, valid, and verifiable rights for such
            use. Any unauthorized use is a severe breach of this License and
            will result in immediate termination without any cure period and may
            lead to severe legal consequences.
          </li>
          <li>
            <strong>f. Quality and Presentation Standards:</strong> Your Work
            must not contain hate speech, discriminatory content, defamatory
            statements, or illegal activities.
          </li>
          <li>
            <strong>g. Legal Compliance and Indemnity:</strong> Your Work must
            be Your original creation or lawfully incorporate content for which
            You possess all rights. You agree to indemnify Mango against claims
            arising from Your infringement of third-party rights.
          </li>
        </ul>

        <h3>8. Brand Misuse and Appeal Process</h3>
        <ul>
          <li>
            <strong>a. Brand Misuse:</strong> If Your Work violates the
            standards in Section 7, the Licensor may suspend or revoke Your
            right to use the Core6™ trademarks.
          </li>
          <li>
            <strong>b. OGC Rights Unaffected:</strong> The license to Use OGC is
            irrevocable and unaffected by any suspension of trademark usage.
          </li>
          <li>
            <strong>c. Appeal Process:</strong> In the event of a trademark
            suspension, You may submit a written appeal to the Licensor within
            thirty (30) days. The Licensor will respond in good faith.
          </li>
        </ul>

        <h3>9. Termination</h3>
        <ul>
          <li>
            <strong>a. Termination for Breach:</strong> This License shall
            terminate automatically if You materially breach its terms and fail
            to cure such breach within thirty (30) days of notification.
          </li>
          <li>
            <strong>b. Immediate Termination:</strong> Breaches of Section 3
            (MCE Clause), Section 4 (Reserved Rights), or Section 7(e)
            (Third-Party IP) shall result in immediate termination with no cure
            period.
          </li>
          <li>
            <strong>c. Survival:</strong> Termination applies only to the
            breaching party.
          </li>
        </ul>

        <h3>10. Governing Law and Dispute Resolution</h3>
        <ul>
          <li>
            <strong>a. Law:</strong> This License shall be governed by the laws
            of New South Wales, Australia.
          </li>
          <li>
            <strong>b. Jurisdiction:</strong> Any disputes shall be subject to
            the exclusive jurisdiction of the courts of New South Wales,
            Australia.
          </li>
          <li>
            <strong>c. Good Faith Negotiation:</strong> Before commencing formal
            proceedings, the parties will attempt in good faith to resolve
            disputes by negotiation for at least thirty (30) days.
          </li>
        </ul>

        <h3>11. General Provisions</h3>
        <ul>
          <li>
            <strong>a. Severability:</strong> If any provision is found invalid,
            the remaining provisions shall remain in full force.
          </li>
          <li>
            <strong>b. Entire Agreement:</strong> This License constitutes the
            entire agreement between You and the Licensor.
          </li>
          <li>
            <strong>c. Assignment:</strong> You may not assign this License
            without Mango&apos;s prior written consent. Mango may assign this
            License to a successor.
          </li>
        </ul>
      </section>

      {/* === FAQ === */}

      <section className="content-section">
        <h2>Plain-English FAQ</h2>

        <div className="faq-item">
          <h3>Can I create and sell products using the Core6 system?</h3>
          <p>
            Yes! The license gives you broad and permanent rights to create and
            sell TTRPGs, board games, miniatures, and even general merchandise.
            The rules for this are based on your company&apos;s size:
          </p>
          <ul>
            <li>
              <strong>
                Independent Creators &amp; Small Businesses (under $2M annual
                gross revenue)
              </strong>{' '}
              can create and sell any of these permitted products completely
              royalty-free.
            </li>
            <li>
              <strong>
                Major Commercial Entities (over $2M annual gross revenue)
              </strong>{' '}
              must contact us for a separate commercial license to sell any
              product. This is our &quot;Be Honourable&quot; principle.
            </li>
          </ul>
        </div>

        <div className="faq-item">
          <h3>Do I have to share back the new content I create for my game?</h3>
          <p>
            Yes, by default. This is a &quot;Share-Alike&quot; license. Any new,
            original content you create in your work — whether it&apos;s a new
            setting, character, monster, or a new rule — is automatically
            considered Open Game Content (OGC) for everyone else in the
            community to use and build upon.
          </p>
        </div>

        <div className="faq-item">
          <h3>How can I protect my own unique IP, like a new game world?</h3>
          <p>
            You can always keep your original creations as your exclusive
            property by &quot;opting-out.&quot; To do this, you must explicitly
            and clearly mark that content as your &quot;Contributor Product
            Identity&quot; in a legal notice within your work. Anything you
            don&apos;t explicitly protect is automatically shared with the
            community.
          </p>
        </div>

        <div className="faq-item">
          <h3>Can I create software, like a character generator or a video game?</h3>
          <p>
            No. All rights for software, video games, and VTT software
            adaptations (like coded character sheets) are strictly reserved.
            This applies to everyone, regardless of size. If you are interested
            in making an application, you must contact us for a separate
            commercial license.
          </p>
        </div>

        <div className="faq-item">
          <h3>Can I write a novel or short story using the Core6 rules or IP?</h3>
          <p>
            No. The rights to create novels and other prose fiction are reserved
            under this license.
          </p>
        </div>

        <div className="faq-item">
          <h3>What&apos;s the difference between VTT content and VTT software adaptations?</h3>
          <p>
            &quot;VTT content&quot; is stuff like adventure modules, maps, and
            tokens that you use on an existing VTT platform. &quot;VTT software
            adaptation&quot; is the code that makes the game work on that
            platform, like an automated character sheet. You can make and sell
            VTT content (subject to the MCE rule), but you cannot create VTT
            software adaptations.
          </p>
        </div>

        <div className="faq-item">
          <h3>What happens if you release a new version of the license?</h3>
          <p>
            This license is irrevocable. Any product you publish under C6OGL
            v1.0 is permanently covered by its terms. You never have to switch
            to a new version for that product.
          </p>
        </div>

        <div className="faq-item">
          <h3>Can I use other companies&apos; IP, like characters from Star Wars?</h3>
          <p>
            Only if you have the legal right to do so. The license requires that
            you have obtained all necessary, valid rights for any third-party IP
            you use. Unauthorized use is a severe breach of the license.
          </p>
        </div>

        <div className="faq-item">
          <h3>What if my small company is acquired by a Major Commercial Entity?</h3>
          <p>
            The MCE rule would then apply. For the new parent company to
            continue selling your previously published for-profit products, they
            would need to secure a commercial license from us.
          </p>
        </div>
      </section>

      <section className="content-section">
        <p>
          Questions? Contact{' '}
          <a href="mailto:ip@core6rpg.com">ip@core6rpg.com</a>.
        </p>
        <Link className="btn btn--secondary btn--small" to="/creators">
          ← Back to Creators
        </Link>
      </section>
    </div>
  );
}
