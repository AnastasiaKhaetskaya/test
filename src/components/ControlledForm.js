import React from 'react'

const ControlledForm = () => {
  return (
    <div className="m-20 flex flex-col text-center justify-items-center">
      <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Управляемые компоненты</h2>
      <form className="mt-8 space-y-6">
        <div className="rounded-md shadow-sm">
          <div>
            <label>
              Имя:
              <input type="text" name="name" className="input-primary" />
            </label>
          </div>

          <div>
            <label>
              Email:
              <input type="email" name="email" className="input-primary" />
            </label>
          </div>

          <div>
            <label>
              Пол:
              <select name="gender" className="input-primary">
                <option value="female">Женский</option>
                <option value="male">Мужской</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Согласен с правилами приложения:
              <input type="checkbox" name="terms" className="input-primary" />
            </label>
          </div>

          <button type="submit" className="btn-primary">
            Отправить
          </button>
        </div>
      </form>
    </div>
  )
}

export default ControlledForm
