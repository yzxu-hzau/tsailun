/*
 * This file is part of the Tsailun project 
 *
 * Copyright (c) 2021-2022 Li Supeng
 *
 * Tsailun is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License.
 *
 * Tsailun is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Tsailun.  If not, see <http://www.gnu.org/licenses/>.
 */

let Globaldata = {
  selectedTreeNode: "",
  titleOfSelectedNode: "",
  titleOfCurDisplayedPage: "",
  treeDataShouldUpdate: "",
  treeDataUpdateReason: "",

  // for tree node selection
  nodeToRefresh: "",
  preferredSelecKey: "",

  treeInstance: null,

  versionList: null,

  appBarHeight: 64,

  searchString: "",

  invalidatePageCache: false,
  readingPage: false,
  
  fnEnableDrawing: null,
  fnDrawingDone: null,
};

export default Globaldata;
