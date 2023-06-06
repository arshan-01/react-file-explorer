import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div>
      <div className="folder">
        <span onClick={() => setExpand(!expand)}>
          {expand ? "📂 " : "📁 "}
          {explorer.title}
        </span>
        <br />
        <div style={{ paddingLeft: "20px" }}>
          {expand &&
            explorer.isFolder &&
            explorer.items.map((item) => (
              <div key={item.id}>
                {item.isFolder ? (
                  <Folder explorer={item} />
                ) : (
                  <span>
                    📄 {item.title} <br />
                  </span>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Folder;
