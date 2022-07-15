import s from './PageHeading.module.css';
function PageHeading({ children }) {
  return (
    <div className={s.pageHeading}>
      <h1 className={s.title}>{children}</h1>
    </div>
  );
}
export default PageHeading;
