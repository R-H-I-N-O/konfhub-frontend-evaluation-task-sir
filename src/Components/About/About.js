import style from "./About.module.css"

const About = () => (
    <div >
      <blockquote>
        <p className={style.description}>
          This is the description of an event. This event was created as an evaluation task for the role of <strong>Frontend Engineer.</strong> <em>Are you the one we are looking for?</em> Don't get nervous. Take help if you need. Ask us more questions if you did not understand the problem. You can reach us out at <a href="mailto:reachus@konfhub.com">reachus@konfhub.com</a>.
        </p>
      </blockquote>
  
      <div style={{ textAlign: 'left' }}>
        <div
          style={{ maxWidth: '100%', height: 'auto', display: 'inline-block' }}
        >
          <img
            src="https://dev-media.konfhub.com/resources/2024/June/09/1717971318450-ffa21dd4-3b8d-4b4c-878e-32d640579510.png"
            alt="Image"
            width="310"
            style={{ height: 'auto' }}
          />
        </div>
      </div>
  
      <div>
        <iframe
          width="640"
          height="480"
          allowFullScreen
          src="https://www.youtube.com/embed/bEM35JDYjrI"
          frameBorder="0"
          title="YouTube video"
        />
      </div>
  
      <table className={style.table}>
        <colgroup>
          <col />
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th><p>A</p></th>
            <th><p>B</p></th>
            <th><p>C</p></th>
          </tr>
          <tr>
            <td><p>A1</p></td>
            <td><p>B1</p></td>
            <td><p>C1</p></td>
          </tr>
          <tr>
            <td><p>A2</p></td>
            <td><p>B2</p></td>
            <td><p>C2</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
  export default About;