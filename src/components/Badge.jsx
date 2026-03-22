const Badge = ({type}) => {
  const styles = {
    personal: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    team: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    internship: "bg-green-500/10 text-green-400 border border-green-500/20",
  };
  return (
    <span
      className={`ml-2 px-2 py-1 text-xs font-medium rounded-md ${styles[type]}`}
    >
      {type}
    </span>
  );
};

export default Badge;
