export default function setup_skeleton(parent) {
    const container = document.createElement("div");
    const month_header = document.createElement("div");
    const week_header = document.createElement("div");
    const day_grid = document.createElement("div");

    month_header.className = "width-280px center-align";
    day_grid.className = "width-280px flex wrap";
    week_header.className = "width-280px flex wrap";
    container.className = "width-280px display-none";

    container.addEventListener("click", e => e.stopPropagation())

    container.appendChild(month_header);
    container.appendChild(week_header);
    container.appendChild(day_grid);
    parent.parentNode.insertBefore(container, parent.nextSibling);
    parent.appendChild(container);

    return [container, month_header, week_header, day_grid];
}