import React from 'react';
import PropTypes from 'prop-types';

const Gif = ({ gif }) => (<img src={gif} alt="gif" />)

Gif.ProtoTypes = {
    gif: PropTypes.string.isRequired,
};

export default Gif;