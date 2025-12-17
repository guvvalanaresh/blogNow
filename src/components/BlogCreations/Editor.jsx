const CustomEditor = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Start writing your amazing content here..."
      className="w-full h-64 border border-gray-300 rounded-sm p-3"
    />
  );
};

export default CustomEditor;
