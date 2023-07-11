export const OrderBy = ({ title, selectName, placeholder, data, defaultValue="", handleChange }) => {
    return (
      <div>
        <label>
          {title}:<span> </span>
          <select onChange={handleChange} name={selectName} defaultValue={defaultValue}>
            <option value="default">{placeholder}</option>
            {data.map((info) => {
              return (
                <option key={info.id} value={info.name}>
                  {info.name}
                </option>
              );
            })}
          </select>
        </label>
      </div>
    );
  }
  