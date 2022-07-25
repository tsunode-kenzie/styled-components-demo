import styles from './styles.module.css';

const ListUsers = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>Daniel</li>
        <li>Alysson</li>
        <li>Alex</li>
      </ul>
    </div>
  )
}

export default ListUsers;