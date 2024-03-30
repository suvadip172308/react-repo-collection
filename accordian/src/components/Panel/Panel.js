const Panel = ({ item, isDisplayPanel, showPanel }) => {
  return (
    <div className="border-2 border-gray-100">
      <div className="px-4 py-4">
        <div className="py-3" onClick={() => showPanel(item.id)}>
          <p className="text-start font-bold">{item.title}</p>
        </div>
        { isDisplayPanel && (
          <div>
            <hr/>
            <p className="text-start">{item.content}</p>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default Panel;