import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { TopicItem } from '../TopicItem';

Enzyme.configure({ adapter: new Adapter() })

const topicInfo = {
  to: '/topic/1',
  title: 'Nodejs 线下 party',
  lastReply: '2018/09/12'
}
describe('<TopicItem />', function () {
  it('shallow render <TopicItem /> ', function () {
    const wrapper = shallow(<TopicItem {...topicInfo}></TopicItem>)
    expect(wrapper.find('.TopicItem-title').text()).toBe(topicInfo.title)
  })
})