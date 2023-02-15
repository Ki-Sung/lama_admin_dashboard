import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/31f7a9df-f2f0-43e3-9b9b-6f77945a2a4e/boss.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230215T054114Z&X-Amz-Expires=86400&X-Amz-Signature=687433135ce01e494d658dba938b0e5ae6a402dfc2bc6d9870f86213a54000c1&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22boss.png%22&x-id=GetObject"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Jaewoo Chung</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/63a109cc-8bc4-4ad0-b37b-ee60475843d3/co_boss.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230215T054227Z&X-Amz-Expires=86400&X-Amz-Signature=3adbd1a58ee61ba60464254d750d72a4f73870fa983a8fd2d629bc6a9fe7dd1f&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22co_boss.jpeg%22&x-id=GetObject"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Soojin Park</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/69bed50e-36e9-4952-a8fc-42e377f4e2ae/sangyoon.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230215T011805Z&X-Amz-Expires=86400&X-Amz-Signature=4c4a25a90645ac9f93372bab40b2c603b4e82ef549cc372f2aa77e5ef8dfb5ed&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22sangyoon.jpeg%22&x-id=GetObject"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sangyoon Hong</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c18c4293-5763-4576-b0eb-30db36e230a7/main.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230215T011830Z&X-Amz-Expires=86400&X-Amz-Signature=d95ff0a659a57d63163922258e457e768b7643ed01cdeeef7ec5e1dadd681786&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22main.jpeg%22&x-id=GetObject"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Hyunsuk Joeng</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}