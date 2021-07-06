import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Layout from '@/layouts/Layout.vue';

describe('Layout.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Layout, {
      slots: {
        default: msg,
      },
    });
    expect(wrapper.text())
      .to
      .include(msg);
  });
});
