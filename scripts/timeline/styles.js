export const styles = `<style>
.timeline-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 20px;
}

.timeline {
    width: 100%;
    border: 1px solid gray;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 4px;
}

.timeline-point {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: -30px;
}

.timeline-point.left {
    left: -15px;
}

.timeline-point.right {
    right: -15px;
}

.timeline-point.mid {
    right: 50%;
}

.timeline-point.left::before {
    content: '2023';
    font-size: 12px;
}

.timeline-point.right::before {
    content: '2025';
    font-size: 12px;
}

.timeline-point.mid::before {
    content: '2024';
    font-size: 12px;
}

.timeline-item {
    position: absolute;
    border-radius: 24px;
    height: 10px;
}

.timeline-item.first {
    width: 20%;
    left: 100px;
}

.timeline-item.second {
    width: 20%;
    left: 310px;
}

.timeline-item.third {
    width: 10%;
    left: 440px;
}

.timeline-item.fourth {
    width: 10%;
    left: 550px;
}

.timeline-item-inner {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    border-radius: 24px;
}

.timeline-item-inner::before,
.timeline-item-inner::after
 {
    content: '';
    height: 100%;
    border-radius: 50%;
    width: 10px;
}

.timeline-item-inner.first::before,
.timeline-item-inner.first::after
{
    background-color: red;
}
.timeline-item-inner.first:hover {
    background-color: red;
}

.timeline-item-inner.second::before,
.timeline-item-inner.second::after
{
    background-color: blueviolet;
}
.timeline-item-inner.second:hover {
    background-color: blueviolet;
}

.timeline-item-inner.third::before,
.timeline-item-inner.third::after
{
    background-color: yellow;
}
.timeline-item-inner.third:hover {
    background-color: yellow;
}

.timeline-item-inner.fourth::before,
.timeline-item-inner.fourth::after
{
    background-color: pink;
}
.timeline-item-inner.fourth:hover {
    background-color: pink;
}

.details-wrapper {
    position: absolute;
    top: -150px;
}

.details {
    display: none;
    padding: 4px;
    border-radius: 10px;
    background-color: antiquewhite;
    position: relative;
    width: 200%;
}

.details p {
    margin: 0;
}

.details::after {
    content: '';
    position: absolute;
    bottom: -25px;
    right: 35%;
    height: 10px;
    border: 10px solid transparent;
    border-top: 20px solid antiquewhite;
    border-bottom: 0;
}

@media screen and (max-width: 900px) {

}
</style>`;
