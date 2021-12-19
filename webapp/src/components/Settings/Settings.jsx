import { useEffect } from "react";
import Attribute from "../Atribute/Attribute";
import { connect } from "react-redux";
import { getColumns } from "../../store/data";
import "./Settings.css";
import Button from "../Button/Button";

const Settings = (props) => {
  const { retrieveColumns, columns, type } = props;
  useEffect(() => retrieveColumns(), []);

  if (type === "landing") {
    return (
      <div className="InitialSettings">
        <p>Select a column to begin:</p>
        <div className="row">
          {columns?.map((column) => (
            <Attribute text={column} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="Settings">
      <div className="d-flex justify-content-start">
        <div className="form">
          <label for="columnSelection" class="form-label">
            Select a column
          </label>
          <select id="columnSelection" class="form-select">
            {columns?.map((column) => (
              <option>{column} </option>
            ))}
          </select>
        </div>
        <Button>Submit</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  columns: state.data.columns,
});

const mapDispatchToProps = (dispatch) => ({
  retrieveColumns: () => dispatch(getColumns()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
