import {React} from 'react'
import {Paper} from '@material-ui/core';

export default function AboutUs() {

    return (
      <Paper  className='all_containers' style={{height: '650px'}}>     
          <ul><b>ToyShare - про що це?</b></ul>
              <li>Це система, яка допомагає людям обмінюватися або дарувати дитячі іграшки та речі.</li>
          <ul><b>Навіщо це?</b></ul>
              <li>Це дозволяє економити гроші.</li>
              <li>Позбавляє будинок від зайвого мотлоху.</li>
              <li>Допомагає природі - зараз дуже актуально
              зменшення споживання і система покликана допомогти
              в цьому: ми зменшуємо кількість відходів, 
              а також кількість купованих речей, тим самим
              зменшується шкідливе виробництво (пластик,
              штучні і натуральні тканини ...).</li>
      </Paper>
  )
}