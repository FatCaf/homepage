export const styles = `<style>

h5 {
    margin-top: 0;
    font-size: 30px;
    align-self: start;
    font-weight: bold;
    color: #FF8C00;
}

.timeline-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 20px;
}

.timeline {
    width: 100%;
    border: 2px solid gray;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 4px;
    height: 20px;
    border-radius: 24px;
}

.timeline-point {
    position: absolute;
    font-size: 16px;
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

.timeline-item {
    position: absolute;
    border-radius: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.timeline-item::before,
.timeline-item::after {
    content: '';
    height: 20px;
    border-radius: 50%;
    width: 20px;
    display: block;
}

.timeline-item.first {
    width: 25%;
    left: calc(10% - 12px);
}

.timeline-item.second {
    width: 20%;
    left: calc(40% - 10px);
}

.timeline-item.third {
    width: 10%;
    left: calc(55% - 5px);
}

.timeline-item.fourth {
    width: 10%;
    left: calc(68% - 5px);
}

.timeline-item.first::before,
.timeline-item.first::after
{
    background-color: #ff6347;
}
.timeline-item.first:hover {
    background-color: #ff6347;
}

.timeline-item.second::before,
.timeline-item.second::after
{
    background-color: #ff8c00;
}
.timeline-item.second:hover {
    background-color: #ff8c00;
}

.timeline-item.third::before,
.timeline-item.third::after
{
    background-color: #ffd700;
}
.timeline-item.third:hover {
    background-color: #ffd700;
}

.timeline-item.fourth::before,
.timeline-item.fourth::after
{
    background-color: #dda0dd;
}
.timeline-item.fourth:hover {
    background-color: #dda0dd;
}

.details {
    display: none;
    position: absolute;
    min-width: 175px;
    max-width: 250px;
    left: 50%;
    transform: translateX(-50%);
    top: -140px;
    padding: 4px;
    border-radius: 10px;
    background-color: rgb(173, 216, 230);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    font-size: 18px;
}

#cs .details {
    width: 250px;
}

.details p {
    margin: 0;
}

@media (max-width: 960px) {
    .timeline-item.third {
        left: calc(53% - 5px);
        width: 13%;
    }
}

@media (max-width: 600px) {
    .timeline-item.first {
        left: calc(8% - 12px);
    }

    .timeline-item.second {
        left: calc(38% - 10px);
    }

    .timeline-item.third {
        left: calc(48% - 5px);
        width: 15%;
    }

    .timeline-item.fourth {
        left: calc(65% - 5px);
        width: 15%;
    }
}

@media (max-width: 530px) {
    .timeline,
    .timeline-item,
    .timeline-item::before,
    .timeline-item::after {
        height: 10px;
    }

    .timeline-item::before,
    .timeline-item::after {
        width: 10px;
    }

    #cs .details {
        left: 80%;
        width: 220px;
    }
}

@media (max-width: 400px) {
    .details {
        font-size: 16px;
    }

    .timeline-item.first {
        left: calc(10% - 12px);
    }

    .timeline-item.second {
        left: calc(40% - 10px);
    }

    .timeline-item.third {
        left: calc(48% - 5px);
    }

    .timeline-item.fourth {
        left: calc(65% - 5px);
    }
}
</style>`;
