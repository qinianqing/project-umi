
import styles from './item.css';
import {connect} from 'dva'

// export default function() {
//   return (
//     <div className={styles.normal}>
//       <h1>Page item</h1>
//     </div>
//   );
// }
function Item(props) {
  return (
    <div className={styles.normal}>
      <h1>Page item</h1>
      <h2>This is {JSON.stringify(props.item)}</h2>
    </div>
  )
}
export default connect(({item})=> ({item}))(Item);
