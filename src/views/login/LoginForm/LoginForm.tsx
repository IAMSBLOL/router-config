import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import { PATHS } from '@/router'

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginForm: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const onFinish = async () => {
    const { getFieldsValue, validateFields } = form
    const yesSir = await validateFields()
    if (yesSir) {
      console.log('Success:', getFieldsValue())
      localStorage.setItem('user', 'logined')
      navigate(PATHS.home)
    }
  }
  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ username: 'admin' }}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label={t('login.用户名')}
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input className='w-full h-12 px-4 py-2 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm'/>
        </Form.Item>

        <Form.Item<FieldType>
          label={t('login.密码')}
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password className='w-full h-12 px-4 py-2  duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm'/>
        </Form.Item>

      </Form>
      <Button
        onClick={onFinish}
        className=' w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black'
        type="primary"
        htmlType="submit">
          Submit
      </Button>
    </div>

  )
}

export default LoginForm
