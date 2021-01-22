export default function setup_skeleton(parent) {
    const container = document.createElement("div");
    const month_header = document.createElement("div");
    const week_header = document.createElement("div");
    const day_grid = document.createElement("div");

    Object.assign(month_header.style, {
        width: "280px",
        textAlign: "center",
        marginBottom: "10px",
        display: "flex",
        justifyContent: "space-between",
        height: "30px",
    })
    Object.assign(day_grid.style, {
        width: "280px",
        display: "flex",
        flexWrap: "wrap",
    })
    Object.assign(week_header.style, {
        width: "280px",
        display: "flex",
        flexWrap: "wrap",
    })
    Object.assign(container.style, {
        width: "280px",
        display: "none",
        padding: "20px",
        fontFamily: `Calibri, "Trebuchet MS", Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif`,
        boxShadow: "1px 3px 10px rgba(0, 0, 0, 0.2)",
        position: "absolute",
        zIndex: "3",
        backgroundColor: "white",
    })

    container.addEventListener("click", e => e.stopPropagation())

    container.appendChild(month_header);
    container.appendChild(week_header);
    container.appendChild(day_grid);
    parent.appendChild(container);

    return [container, month_header, week_header, day_grid];
}
