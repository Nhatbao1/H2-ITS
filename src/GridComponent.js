import { useEffect, useState } from "react"

const GridComponent = ({ row, col }) => {
    const [selectedCells, setSelectedCells] = useState([]);
    const [grid, setGrid] = useState([])
    useEffect(() => {
        const gridData = [];
        for (let i = 0; i < row; i++) {
            const row = [];
            for (let j = 0; j < col; j++) {
                row.push(`Cell ${i * col + j + 1}`);
            }
            gridData.push(row);
        }
        setGrid(gridData)
    }, [row, col])
    const handleCellClick = (rowIndex, colIndex) => {
        const cellKey = `${rowIndex}-${colIndex}`;
        const isCellSelected = selectedCells.includes(cellKey);
        if (isCellSelected) {
            setSelectedCells(selectedCells.filter((cell) => cell !== cellKey));
        } else {
            setSelectedCells([...selectedCells, cellKey]);
        }
    };
    const handleRowButtonClick = (rowIndex) => {
        const clickRowIndex = document.getElementById(rowIndex);
        const classList = clickRowIndex.querySelectorAll(".grid-cell")
        classList.forEach((element) => {
            if (element.className.includes("selected")) {
                element.classList.remove("selected")
            } else {
                element.classList.add("selected")
            }
        });
    }

    // Sử dụng useState để lưu trữ thông tin về className của các hàng
    return (
        <div className="grid-container">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className={`grid-row`} id={rowIndex}>
                    {row.map((cell, colIndex) => (
                        <div key={colIndex}
                            className={`grid-cell ${selectedCells.includes(`${rowIndex}-${colIndex}`) ? 'selected' : ''}`}
                            onClick={() => handleCellClick(rowIndex, colIndex)}>
                            {cell}
                        </div>
                    ))}
                    <button onClick={() => handleRowButtonClick(rowIndex)}>Đổi màu</button>
                </div>
            ))}
        </div>
    )
}
export default GridComponent