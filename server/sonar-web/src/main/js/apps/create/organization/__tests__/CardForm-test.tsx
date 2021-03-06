/*
 * SonarQube
 * Copyright (C) 2009-2018 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import * as React from 'react';
import { shallow } from 'enzyme';
import { CardForm } from '../CardForm';

jest.mock('../BillingFormShim');

it('should render', () => {
  const wrapper = shallow(
    <CardForm
      createOrganization={jest.fn()}
      currentUser={{ isLoggedIn: false }}
      onFailToUpgrade={jest.fn()}
      onSubmit={jest.fn()}
      subscriptionPlans={[{ maxNcloc: 100000, price: 10 }, { maxNcloc: 250000, price: 75 }]}
    />
  );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('BillingFormShim').dive()).toMatchSnapshot();
});
