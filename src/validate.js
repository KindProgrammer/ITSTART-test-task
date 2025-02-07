import { object, string, date} from 'yup';

const editFormSchema = object({
    title: string()
        .required('Поле не должно быть пустым')
        .max(50, "Заголовок не должен превышать 50 символов"),
    description: string()
        .required('Поле не должно быть пустым')
        .max(200, 'Техт не должен превышать 200 символов'),
    date: date()
        .required('Поле не должно быть пустым'),
    time: string()
        .required('Поле не должно быть пустым')
        .length(5)
        .matches(/(\d){2}:(\d){2}/, 'Время заполнено не корректно')
})

export default editFormSchema;