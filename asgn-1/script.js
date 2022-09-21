// select dom elements
let counterContainer = document.querySelector('.counters');
let addCounterBtn = document.querySelector('#add-counter');
let resetBtn = document.querySelector('#reset');
let counterActionButtons = document.querySelectorAll('.increment, .decrement');

// actions
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const ADDCOUNTER = 'add-counter';
const RESETCOUNTERS = 'reset-counters'
// initial state
const initialState = {
  counters: [{
    id: 0,
    value: 0,
  },]
};

// create reducer function
function counterReducer(state = initialState, action) {

  if (action.type === INCREMENT) {
    return {
      ...state,
      counters: state.counters.map((counter) => {
        if (counter.id === action.payload) {
          let toAdd = action.payload + 1;
          return {
            ...counter,
            value: counter.value + toAdd,
          };
        } else {
          return counter;
        }
      }),
    }
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      counters: state?.counters?.map((counter) => {
        if (counter.id === action.payload) {
          let toSubtract = action.payload + 1;
          return {
            ...counter,
            value: counter.value - toSubtract,
          }
        } else {
          return counter;
        }
      })
    };
  } else if (action.type === ADDCOUNTER) {
    let countersLength = state.counters.length;
    let newCounter = {
      id: countersLength,
      value: 0,
    };
    return {
      ...state,
      counters: [...state.counters, newCounter],
    };
  } else if (action.type === RESETCOUNTERS) {
    return {
      counters: [{
        id: 0,
        value: 0,
      },]
    }

  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  console.log(state)
  const counters = state.counters;
  counterContainer.innerHTML = '';
  counters.map((counter) => addCounterIntoDom(counter.id, counter.value))
};

// update UI initially
render();

store.subscribe(render);


function addCounterIntoDom(id, value) {
  let newCounter = document.createElement('div');
  newCounter.setAttribute('counter-id', id);
  let html = `
  <div class="mt-2 p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div id="counter" class="text-2xl font-semibold">${value}</div>
        <div class="flex space-x-3">
          <button onclick="" data-btn-id="${id}" class="increment bg-indigo-400 text-white px-3 py-2 rounded shadow" >
            Increment
          </button>
          <button data-btn-id="${id}" class="decrement bg-red-400 text-white px-3 py-2 rounded shadow" >
            Decrement
          </button>
        </div>
      </div>
  `;
  newCounter.innerHTML = html;
  counterContainer.append(newCounter);
}

function handleIncrement(id) {
  store.dispatch({
    type: INCREMENT,
    payload: id,
  });
}

function handleDecrement(id) {
  store.dispatch({
    type: DECREMENT,
    payload: id
  });
}

function handleAddCounter() {
  store.dispatch({
    type: ADDCOUNTER
  })
}

function handleReset() {
  store.dispatch({
    type: RESETCOUNTERS
  })
}

document.addEventListener('click', function (e) {
  const target = e.target;
  const counterActionButtons = Array.from(document.querySelectorAll('.increment, .decrement, .add-counter, .reset'));
  if (counterActionButtons.includes(target)) {
    const id = parseInt(e.target.getAttribute('data-btn-id'));
    const isIncrementBtn = target.classList.contains('increment');
    const isDecrementBtn = target.classList.contains('decrement');
    const isAddCounterBtn = target.classList.contains('add-counter');
    const isResetBtn = target.classList.contains('reset');
    if (isIncrementBtn) handleIncrement(id);
    if (isDecrementBtn) handleDecrement(id);
    if (isAddCounterBtn) handleAddCounter();
    if (isResetBtn) handleReset();
  }

}, false)
