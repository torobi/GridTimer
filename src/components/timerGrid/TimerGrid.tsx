import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { rename, selectColNames } from "../../store/slice/colNameSlice";
import { selectRowNames } from "../../store/slice/rowNameSlice";
import TimerButton from "../timerButton/TimerButton";
import RemoveColButton from "../removeColButton/RemoveColButton";
import RemoveRowButton from "../removeRowButton/removeRowButton";
import AddColButton from "../addColButton/AddColButton";
import AddRowButton from "../addRowButton/AddRowButton";
import { useCookieLoad } from "../../hooks/useCookieLoader";

function TimerGrid() {
  const dispatch = useDispatch();
  const colNames = useSelector(selectColNames);
  const rowNames = useSelector(selectRowNames);

  useCookieLoad();

  const timerW = "240px";
  const removeRowButtonW = "50px";
  const addColButtonW = "50px";

  const timerNameH = "50px";
  const timerButtonH = "100px";
  const removeColButtonH = "50px";
  const addRowButtonH = "50px";

  const Style = {
    container: css`
      display: grid;
      grid-template-columns: repeat(${colNames.length}, ${timerW}) ${removeRowButtonW} ${addColButtonW};
      grid-template-rows:
        ${timerNameH} repeat(${rowNames.length}, ${timerButtonH})
        ${removeColButtonH} ${addRowButtonH};

      row-gap: 10px;
      column-gap: 10px;
    `,

    colName: (colIndex: number) => {
      return css`
        text-align: center;
        border: none;
        border-radius: 10px;

        grid-column: ${colIndex + 1};
        grid-row: 1;
      `;
    },
  };

  const timerNames = () => {
    return colNames.map((colName, colIndex) => {
      return (
        <input
          key={colIndex}
          css={Style.colName(colIndex)}
          placeholder="timer title"
          value={colName}
          onChange={(ev) =>
            dispatch(rename({ index: colIndex, name: ev.target.value }))
          }
        />
      );
    });
  };

  const removeColButtons = () => {
    return colNames.map((_, colIndex) => {
      return (
        <RemoveColButton
          key={colIndex}
          {...{ rowIndex: 1 + rowNames.length, colIndex }}
        />
      );
    });
  };

  const removeRowButtons = () => {
    return rowNames.map((_, rowIndex) => {
      return (
        <RemoveRowButton
          key={rowIndex}
          {...{ rowIndex, colIndex: colNames.length }}
        />
      );
    });
  };

  return (
    <div css={Style.container}>
      {timerNames()}

      {colNames.map((_, colIndex) => {
        return rowNames.map((_, rowIndex) => {
          return (
            <TimerButton
              key={`${colIndex}_${rowIndex}`}
              {...{ colIndex, rowIndex }}
            />
          );
        });
      })}

      {removeColButtons()}
      {removeRowButtons()}
      <AddColButton />
      <AddRowButton />
    </div>
  );
}

export default TimerGrid;
