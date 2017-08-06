from django.db import models

from core import behaviors


class TestModel(behaviors.UUIDable, behaviors.Timestampable, models.Model):
    pass

    class Meta:
        app_label = 'core'


def test_timestampable():
    test_inst = TestModel()

    assert hasattr(test_inst, 'created_at')
    assert hasattr(test_inst, 'modified_at')


def test_uuidable():
    test_inst = TestModel()

    assert hasattr(test_inst, 'id')
