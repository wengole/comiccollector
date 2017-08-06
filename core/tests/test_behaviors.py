from django.db import models
import pytest

from core import behaviors


class TestModel(behaviors.UUIDable, behaviors.Timestampable, models.Model):
    pass

    class Meta:
        app_label = 'core'


class TestTimestampableBehavior():

    @pytest.mark.django_db
    def test_created_at(self):
        test_inst = TestModel.objects.create()

        assert test_inst.created_at is not None
        assert test_inst.modified_at is None

        test_inst.save()
        test_inst.refresh_from_db()
        assert test_inst.modified_at is not None
