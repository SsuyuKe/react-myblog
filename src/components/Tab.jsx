import clsx from 'clsx';

const Tab = ({ tabKey, label, activeKey, className, onClick }) => {
  const activeCls = 'bg-secondaryTabColor !text-white'
  return (
    <button
      className={clsx(className, (activeKey === tabKey) && activeCls, 'border border-secondaryTabColor border-solid rounded-2xl px-5 py-1 text-secondaryTabColor')}
      onClick={() => onClick(tabKey)}
    >
      {label}
    </button>
  )
}

export default Tab