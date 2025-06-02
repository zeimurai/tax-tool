const years = [2024, 2023, 2022];

function createYearSection(year) {
    const section = document.createElement('div');
    section.className = 'year-section';
    section.innerHTML = `
    <h3>${year}年度</h3>
    <div class="entries" data-year="${year}"></div>
    <button class="add-btn">+ 入出国日を追加</button>
    <div class="total">${year}年度滞在日数合計：0</div>
  `;

    const entriesDiv = section.querySelector('.entries');
    const addBtn = section.querySelector('.add-btn');
    const totalDisplay = section.querySelector('.total');

    function addEntry() {
        const div = document.createElement('div');
        div.className = 'entry';
        div.innerHTML = `
      入国日 <input type="date" class="arrival">
      出国日 <input type="date" class="departure">
      <button class="remove-btn">削除</button>
    `;
        entriesDiv.appendChild(div);
        attachListeners(div);
    }

    function attachListeners(container) {
        const arrival = container.querySelector('.arrival');
        const departure = container.querySelector('.departure');
        const removeBtn = container.querySelector('.remove-btn');

        arrival.addEventListener('change', calculateTotal);
        departure.addEventListener('change', calculateTotal);

        removeBtn.addEventListener('click', () => {
            container.remove();
            calculateTotal();
        });
    }

    function calculateTotal() {
        let total = 0;
        const entries = entriesDiv.querySelectorAll('.entry');
        const periods = []; // 滞在期間（[start, end]）を格納
        let errorMessage = "";

        for (const entry of entries) {
            const arrivalInput = entry.querySelector('.arrival');
            const departureInput = entry.querySelector('.departure');
            if (!arrivalInput.value || !departureInput.value) continue;

            const arrival = new Date(arrivalInput.value);
            const departure = new Date(departureInput.value);

            if (arrival > departure) {
                errorMessage = "出国日が入国日より前になっています。";
                break;
            }

            const start = new Date(`${year}-01-01`);
            const end = new Date(`${year}-12-31`);
            const stayStart = arrival < start ? start : arrival;
            const stayEnd = departure > end ? end : departure;

            if (stayStart > stayEnd) continue;

            // 重複チェック：既存の期間と比べる
            for (const [prevStart, prevEnd] of periods) {
                if (stayStart <= prevEnd && stayEnd >= prevStart) {
                    errorMessage = "滞在期間が他の期間と重複しています。";
                    break;
                }
            }
            if (errorMessage) break;

            periods.push([stayStart, stayEnd]);

            const diffMs = stayEnd - stayStart;
            total += Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
        }

        if (errorMessage) {
            totalDisplay.textContent = `${year}年度滞在日数合計：エラー - ${errorMessage}`;
            totalDisplay.style.color = "red";
        } else {
            totalDisplay.textContent = `${year}年度滞在日数合計：${total}`;
            totalDisplay.style.color = "black";
        }

        // html to pdf
        if (!errorMessage) {
            localStorage.setItem(`i_stays_${year}`, total); 
        }
    }

    addBtn.addEventListener('click', addEntry);
    addEntry(); // 初期1行追加
    calculateTotal();

    return section;
}

const container = document.getElementById('container');
years.forEach(year => {
    container.appendChild(createYearSection(year));
});