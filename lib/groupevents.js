const _0x4bf9f9 = function () {
  let _0x386e16 = true;
  return function (_0x24cc82, _0x345a90) {
    const _0x5c91fe = _0x386e16 ? function () {
      if (_0x345a90) {
        const _0x33b675 = _0x345a90.apply(_0x24cc82, arguments);
        _0x345a90 = null;
        return _0x33b675;
      }
    } : function () {};
    _0x386e16 = false;
    return _0x5c91fe;
  };
}();
const _0x3d40b9 = _0x4bf9f9(this, function () {
  return _0x3d40b9.toString().search("(((.+)+)+)+$").toString().constructor(_0x3d40b9).search('(((.+)+)+)+$');
});
_0x3d40b9();
const _0x354edb = function () {
  let _0x38f5ec = true;
  return function (_0x518780, _0x569e99) {
    const _0x132717 = _0x38f5ec ? function () {
      if (_0x569e99) {
        const _0xf6a4cb = _0x569e99.apply(_0x518780, arguments);
        _0x569e99 = null;
        return _0xf6a4cb;
      }
    } : function () {};
    _0x38f5ec = false;
    return _0x132717;
  };
}();
const _0x357411 = _0x354edb(this, function () {
  let _0x17b64d;
  try {
    const _0x46be89 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x17b64d = _0x46be89();
  } catch (_0x2b8bc1) {
    _0x17b64d = window;
  }
  const _0x2e1903 = _0x17b64d.console = _0x17b64d.console || {};
  const _0x4ae94d = ["log", 'warn', 'info', "error", "exception", 'table', 'trace'];
  for (let _0x396fe1 = 0x0; _0x396fe1 < _0x4ae94d.length; _0x396fe1++) {
    const _0x5ec3cf = _0x354edb.constructor.prototype.bind(_0x354edb);
    const _0x1f82b0 = _0x4ae94d[_0x396fe1];
    const _0x490467 = _0x2e1903[_0x1f82b0] || _0x5ec3cf;
    _0x5ec3cf.__proto__ = _0x354edb.bind(_0x354edb);
    _0x5ec3cf.toString = _0x490467.toString.bind(_0x490467);
    _0x2e1903[_0x1f82b0] = _0x5ec3cf;
  }
});
_0x357411();
const {
  isJidGroup
} = require("@whiskeysockets/baileys");
const config = require("../config");
const ppUrls = ["https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png", "https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png", "https://i.ibb.co/KhYC4FY/1221bc0bdd2354b42b293317ff2adbcf-icon.png"];
const GroupEvents = async (_0x32ce85, _0xaa2b98) => {
  try {
    const _0x5b9a08 = isJidGroup(_0xaa2b98.id);
    if (!_0x5b9a08) {
      return;
    }
    const _0x26997f = await _0x32ce85.groupMetadata(_0xaa2b98.id);
    const _0x5e9789 = _0xaa2b98.participants;
    const _0x1d4949 = _0x26997f.desc;
    const _0x57de51 = _0x26997f.participants.length;
    let _0x51ccd3;
    try {
      _0x51ccd3 = await _0x32ce85.profilePictureUrl(_0xaa2b98.id, 'image');
    } catch {
      _0x51ccd3 = ppUrls[Math.floor(Math.random() * ppUrls.length)];
    }
    for (const _0x4f6be4 of _0x5e9789) {
      const _0x461831 = _0x4f6be4.split('@')[0x0];
      const _0x3e6e7a = new Date().toLocaleString();
      if (_0xaa2b98.action === 'add' && config.WELCOME === "true") {
        const _0x42c64e = "*╭ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄──*\n*│  ̇─̣─̇─̣〘 ωєℓ¢σмє 〙̣─̇─̣─̇*\n*├┅┅┅┅┈┈┈┈┈┈┈┈┈┅┅┅◆*\n" + ("*│❀ нєу* @" + _0x461831 + "\n") + ("*│❀ gʀσᴜᴘ* " + _0x26997f.subject + "\n") + "*├┅┅┅┅┈┈┈┈┈┈┈┈┈┅┅┅◆*\n" + "*│● ѕтαу ѕαfє αɴ∂ fσℓℓσω*\n" + "*│● тнє gʀσυᴘѕ ʀᴜℓєѕ!*\n" + ("*│● ᴊσιɴє∂ " + _0x57de51 + "*\n") + "*│● ©Powered by HACKLINK-XD⎯꯭̽👑*\n" + "*╰┉┉┉┉┈┈┈┈┈┈┈┈┉┉┉᛫᛭*\n" + ('' + _0x1d4949);
        await _0x32ce85.sendMessage(_0xaa2b98.id, {
          'image': {
            'url': _0x51ccd3
          },
          'caption': _0x42c64e,
          'mentions': [_0x4f6be4],
          'contextInfo': {
            'mentionedJid': [{
              'sender': _0x4f6be4
            }.sender],
            'forwardingScore': 0x3e7,
            'isForwarded': true,
            'forwardedNewsletterMessageInfo': {
              'newsletterJid': "12",
              'newsletterName': "HACKLINK TECH.INC⎯꯭̽ 🍉",
              'serverMessageId': 0x8f
            }
          }
        });
      } else {
        if (_0xaa2b98.action === 'remove' && config.GOODBYE === "true") {
          const _0x3bc3e6 = "*╭ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄──*\n*│  ̇─̣─̇─̣〘 gσσ∂вує 〙̣─̇─̣─̇*\n*├┅┅┅┅┈┈┈┈┈┈┈┈┈┅┅┅◆*\n" + ("*│❀ ᴜѕєʀ* @" + _0x461831 + "\n") + "*│● мємвєʀѕ ιѕ ℓєfт тнє gʀσᴜᴘ*\n" + ("*│● мємвєʀs " + _0x57de51 + "*\n") + "*│● ©Powered by HACKLINK-XD⎯꯭̽👑*\n" + "*╰┉┉┉┉┈┈┈┈┈┈┈┈┉┉┉᛫᛭*";
          await _0x32ce85.sendMessage(_0xaa2b98.id, {
            'image': {
              'url': _0x51ccd3
            },
            'caption': _0x3bc3e6,
            'mentions': [_0x4f6be4],
            'contextInfo': {
              'mentionedJid': [{
                'sender': _0x4f6be4
              }.sender],
              'forwardingScore': 0x3e7,
              'isForwarded': true,
              'forwardedNewsletterMessageInfo': {
                'newsletterJid': "12",
                'newsletterName': "HACKLINK TECH.INC⎯꯭̽ 🍉",
                'serverMessageId': 0x8f
              }
            }
          });
        } else {
          if (_0xaa2b98.action === "demote" && config.ADMIN_STATUS === "true") {
            const _0x42e8ee = _0xaa2b98.author.split('@')[0x0];
            await _0x32ce85.sendMessage(_0xaa2b98.id, {
              'text': "*╭────⬡ αᴄтισɴ-ѕтαтᴜs ⬡────* \n" + ("*├▢ @" + _0x42e8ee + " нαѕ ∂ємσтє∂*\n") + ("*├▢ @" + _0x461831 + " fʀσм α∂мιɴ*\n") + ("*├▢ тιмє : " + _0x3e6e7a + "*\n") + ("*├▢ gʀσᴜᴘ :* " + _0x26997f.subject + "\n") + "*╰────────────────────*",
              'mentions': [_0xaa2b98.author, _0x4f6be4],
              'contextInfo': {
                'mentionedJid': [{
                  'sender': _0xaa2b98.author
                }.sender],
                'forwardingScore': 0x3e7,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "12",
                  'newsletterName': "HACKLINK TECH.INC⎯꯭̽ 🍉",
                  'serverMessageId': 0x8f
                }
              }
            });
          } else {
            if (_0xaa2b98.action === "promote" && config.ADMIN_STATUS === "true") {
              const _0x1da85d = _0xaa2b98.author.split('@')[0x0];
              await _0x32ce85.sendMessage(_0xaa2b98.id, {
                'text': "*╭────⬡ αᴄтισɴ-ѕтαтᴜs ⬡────* \n" + ("*├▢ @" + _0x1da85d + " нαѕ ᴘʀσмσтє∂*\n") + ("*├▢ @" + _0x461831 + " тσ α∂мιɴ*\n") + ("*├▢ тιмє : " + _0x3e6e7a + "*\n") + ("*├▢ gʀσᴜᴘ : " + _0x26997f.subject + "*\n") + "*╰────────────────────*",
                'mentions': [_0xaa2b98.author, _0x4f6be4],
                'contextInfo': {
                  'mentionedJid': [{
                    'sender': _0xaa2b98.author
                  }.sender],
                  'forwardingScore': 0x3e7,
                  'isForwarded': true,
                  'forwardedNewsletterMessageInfo': {
                    'newsletterJid': "12",
                    'newsletterName': "HACKLINK TECH.INC⎯꯭̽ 🍉",
                    'serverMessageId': 0x8f
                  }
                }
              });
            }
          }
        }
      }
    }
  } catch (_0x32a03e) {
    console.error("Group event error:", _0x32a03e);
  }
};
module.exports = GroupEvents;
//
