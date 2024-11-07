export const dynamic = 'force-dynamic';
import CreditSimulator from '../creditSimulator';
import Style from '../Styles.module.sass';

export default async function Catalog() {
  return (
    <div className={Style.payLayout}>
      <CreditSimulator />
    </div>
  );
}
