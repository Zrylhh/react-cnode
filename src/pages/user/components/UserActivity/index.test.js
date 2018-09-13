import React from 'react'
import { UserActivity } from './index'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('<UserActivity />', function () {
  it('render <UserActivity /> component with zero topics', function () {
    const type = '最近创建的话题'
    const noTopic = '暂时没任何活动'
    const wrapper = shallow(
      <UserActivity
          topics={[]}
          type={type}
          className="topic-created"
      ></UserActivity>)
    expect(wrapper.find('.Activity-title').text()).toBe(type)
    expect(wrapper.find('.no-activity').text()).toBe(noTopic)
  })
})
