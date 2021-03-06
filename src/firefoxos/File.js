/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * File Constructor
 *
 * @param name {DOMString} name of the file, without path information
 * @param fullPath {DOMString} the full path of the file, including the name
 * @param type {DOMString} mime type
 * @param lastModifiedDate {Date} last modified date
 * @param size {Number} size of the file in bytes
 */
var File = function(name, fullPath, type, lastModifiedDate, size) {
    var blob_ = null;

    this.name = name || '';
    this.fullPath = fullPath || null;
    this.type = type || '';
    this.lastModifiedDate = lastModifiedDate || null;
    this.size = size || 0;

    // Need some black magic to correct the object's size/name/type based on the
    // blob that is saved.
    Object.defineProperty(this, 'blob_', {
      enumerable: true,
      get: function() {
          return blob_;
      },
      set: function (val) {
          blob_ = val;
          this.size = blob_.size;
          this.name = blob_.name;
          this.type = blob_.type;
          this.lastModifiedDate = blob_.lastModifiedDate;
      }.bind(this)
    });
};

module.exports = File;
